import { Banner } from "./components/Banner/";
import { TextField } from "./components/TextField";

export function App() {
  return (
    <div className="App">
      <Banner />
      <TextField label="Nome" placeholder="Digite seu nome" />
      <TextField label="Cargo" placeholder="Digite seu cargo" />
      <TextField label="Image" placeholder="Informe o endereço da imagem" />
    </div>
  );
}
