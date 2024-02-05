import Container from "@/app/atoms/container";
import Label from "@/app/atoms/label";
import { ReactElement, SetStateAction, useEffect, useState } from "react";
import axios from "axios";

type Props = {
  title: string;
  children?: ReactElement;
  onChange: () => void;
};

export default function InputSel({ title, onChange }: Props) {
  const [estados, setEstados] = useState([]);
  const [selecionado, setSelecionado] = useState("");

  // funcao para retornar os estados
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
        );
        const estadosOrdenados = response.data.sort((a, b) =>
          a.nome.localeCompare(b.nome)
        );
        setEstados(estadosOrdenados);
      } catch (error) {
        console.error("Error ao obter estados:", error);
      }
    };
    fetchData();
  }, []);

  const handleChange = (event: { target: { value: any } }) => {
    const selectValue = event.target.value;
    setSelecionado(selectValue);
    onChange(selectValue);
  };
  return (
    <Container width={350} height={60} color="secondary">
      <div style={{ width: "100%" }}>
        <Label value={title} />
        <select
          value={selecionado}
          onChange={handleChange}
          style={{ width: "75%" }}
        >
          <option value="">Selecione...</option>
          {estados.map((estado) => (
            <option key={estado.id} value={estado.nome}>
              {estado.sigla}
            </option>
          ))}
        </select>
      </div>
    </Container>
  );
}
