
import { configureStore } from "@reduxjs/toolkit";
import clientsReducer from "./clientSlice";
import pdfReducer  from "./pdfSlice"

export const store = configureStore({
  reducer: {
    clients: clientsReducer,
      pdf: pdfReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['pdf/setUploadedFile'],
        ignoredPaths: ['pdf.uploadedFile'],
      },
    }),

});







