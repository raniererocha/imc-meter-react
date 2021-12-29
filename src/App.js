import { useRef, useState, useEffect } from "react";
import * as C from "./App.styled";
import { ShowResults } from "./components/ShowResults";

export const App = () => {
	const [imc, setImc] = useState({
		imc: 0,
		weight: 0,
		height: 0,
		idealWeight: 0,
	});
	const inputs = useRef(null);

	useEffect(() => console.log(imc), [imc]);

	const calculateImc = () => {
		let [weight, height] = inputs.current.childNodes;
		weight = weight.value.replace(",", ".");
		height = height.value.replace(",", ".");

		if (!isNaN(weight) && !isNaN(height)) {
			setImc({
				imc: Number((weight / height ** 2).toFixed(1)),
				weight: Number(weight),
				height: Number(height),
				idealWeight: Number((weight - (height ** 2 * 21.7)).toFixed(1)),
			});
		} else {
			console.log("Deu Erro");
		}
	};

	return (
		<>
			<C.Header>
				<h1>IMC Meter</h1>
				<C.Text opacity="0.67">Te ajudando de forma simples!</C.Text>
			</C.Header>
			<ShowResults props={imc} />
			{/* input */}
			<C.InputGroup ref={inputs}>
				<C.Input type="text" placeholder="Digite seu Peso" />
				<C.Input type="text" placeholder="Digite sua Altura" />
				<C.Button onClick={calculateImc}>Calcular IMC</C.Button>
			</C.InputGroup>
			<C.Footer>
				<C.Text>Feito por <a href="https://www.github.com/raniererocha" target="_blank">Raniere</a> com muito ♥</C.Text>
			</C.Footer>
		</>
	);
};
