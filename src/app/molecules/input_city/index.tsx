import Container from "@/app/atoms/container";
import Label from "@/app/atoms/label";
import { useEffect, useState } from "react";
import axios from "axios";
import InputText from "../input_Text";

type Props = {
  title: string;
  ufSelect: string;
  findCity: string;
};

export default function InputCity({ title, ufSelect, findCity }: Props) {
  const [cities, setCities] = useState([]);
  const [citySearch, setCitySearch] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (ufSelect && citySearch) {
          const response = await axios.get(
            `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufSelect}/municipios`
          );
          // filtrar a cidade com base na pesquisa
          const citiesSearch = response.data.filter((city) =>
            city.nome.toLowerCase().includes(citySearch.toLowerCase())
          );
          setCities(citiesSearch);
        } else {
          setCities([]);
        }
      } catch (error) {
        console.log("Error ao obter cidades: " + error);
      }
    };
    fetchData();
  }, [ufSelect, citySearch]);

  const handleInputChange = (event: { target: { value: any } }) => {
    const inputCity = event.target.value;
    setCitySearch(inputCity);
    setSelectedCity("");
  };

  const handleSelectChange = (event: { target: { value: any } }) => {
    const selectValue = event.target.value;
    setSelectedCity(selectValue);
    setCitySearch("");
  };

  return (
    <Container width={350} height={100} color="secondary">
      <div>
        <InputText event={handleInputChange} title={title} value={findCity} />
      </div>
    </Container>
  );
}
