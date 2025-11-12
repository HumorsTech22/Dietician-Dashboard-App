
import { configureStore } from "@reduxjs/toolkit";
import clientsReducer from "./clientSlice";
import pdfReducer  from "./pdfSlice";
import extractedDataReducer from "./extractedDataSlice";
import clientProfileReducer from "./clientProfileSlice";

export const store = configureStore({
  reducer: {
    clients: clientsReducer,
      pdf: pdfReducer,
      extractedData: extractedDataReducer,
       clientProfile: clientProfileReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['pdf/setUploadedFile'],
        ignoredPaths: ['pdf.uploadedFile'],
      },
    }),

});







