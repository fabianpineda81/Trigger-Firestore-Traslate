const {onDocumentWritten} = require("firebase-functions/v2/firestore");
const admin = require("firebase-admin");
const {Translate} = require("@google-cloud/translate").v2;

admin.initializeApp();

const translate = new Translate();

exports.translateTodo=
onDocumentWritten("Todos/{userEmail}/userTodos/{todoId}", async (event) => {
  const snapshot = event.data.after; 
  if (!snapshot.exists) {
    return null; 
  }

  const data = snapshot.data();
  const descriptionToTranslate = data.description;
  const titleToTranslate = data.title;
  const targetLanguage = "en";

  if (!descriptionToTranslate || !titleToTranslate) {
    console.error("Faltan datos para traducir.");
    return null;
  }

  try {
    const [translatedDescription]=
    await translate.translate(descriptionToTranslate, targetLanguage);
    const [translatedTitle]=
    await translate.translate(titleToTranslate, targetLanguage);

    console.log(`Título original: ${titleToTranslate}`);
    console.log(`Título traducido: ${translatedTitle}`);
    console.log(`Descripción original: ${descriptionToTranslate}`);
    console.log(`Descripción traducida: ${translatedDescription}`);

    return snapshot.ref.update({
      translatedDescription: translatedDescription,
      translatedTitle: translatedTitle,
    });
  } catch (error) {
    console.error("Error al traducir el texto:", error);
    return null;
  }
});
