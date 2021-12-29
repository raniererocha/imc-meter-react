import { useEffect, useState } from "react";

import * as C from "./style";

export const ShowResults = ({ props }) => {
	let [subtext, setSubtext] = useState("");
	let [text, setText] = useState("Calcule seu IMC");
	useEffect(() => {
		let degree = "";
		if(props.imc === 0 || isNaN(props.imc)) {
			setText("Calcule seu IMC")
			setSubtext("")
		}else if (props.imc >= 40) {
			setText(`IMC de ${props.imc} - Obesidade III`);
			setSubtext(`Precisa perder ${props.idealWeight}kg para alcançar o peso ideal`)
		} else if (props.imc >= 35 && props.imc <= 39.9) {
			setText(`IMC de ${props.imc} - Obesidade II`);
			setSubtext(`Precisa perder ${props.idealWeight}kg para alcançar o peso ideal`)
		} else if (props.imc >= 30 && props.imc <= 34.9) {
			setText(`IMC de ${props.imc} - Obesidade I`);
			setSubtext(`Precisa perder ${props.idealWeight}kg para alcançar o peso ideal`)
		} else if (props.imc >= 25 && props.imc <= 29.9) {
			setText(`IMC de ${props.imc} - Excesso de peso`);
			setSubtext(`Precisa perder ${props.idealWeight}kg para alcançar o peso ideal`)
		} else if (props.imc >= 18.5 && props.imc <= 24.9) {
			setText(`IMC de ${props.imc} - Peso ideal`);
			setSubtext(`Muito bem, você está no peso ideal para sua altura`)
		} else {
			setText(`IMC de ${props.imc} - Abaixo do peso`);
			setSubtext(`Precisa ganhar ${props.idealWeight * -1}kg para alcançar o peso ideal`)
		}
		


	}, [props.imc]);
	return (
		<C.Container>
			<h2>{text}</h2>
			<p>{subtext}</p>
		</C.Container>
	);
};
