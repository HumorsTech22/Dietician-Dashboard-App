
import { configureStore } from "@reduxjs/toolkit";
import clientsReducer from "./clientSlice";
import pdfReducer  from "./pdfSlice";
import extractedDataReducer from "./extractedDataSlice";
import clientProfileReducer from "./clientProfileSlice";
import scoresInsightReducer from "./scoresInsightSlice"

export const store = configureStore({
  reducer: {
    clients: clientsReducer,
      pdf: pdfReducer,
      extractedData: extractedDataReducer,
       clientProfile: clientProfileReducer,
       scoresInsight: scoresInsightReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['pdf/setUploadedFile'],
        ignoredPaths: ['pdf.uploadedFile'],
      },
    }),

});

