import { NativeRouter } from "react-router-native";
import { Route,Routes } from "react-router-dom";

import Home from "./routes/Home";

export default function App() {
  return (
    <>
      <NativeRouter>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
        </Routes>
      </NativeRouter>
    </>
  );
}
