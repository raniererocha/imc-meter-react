import styled from "styled-components";

export const Header = styled.header`
	width: 100%;
	height: 150px;
	background-color: #1b5e20;
	color: white;
	display: flex;
	flex-direction: column;
	gap: 15px;
	align-items: center;
	justify-content: center;
	box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.3);
`;
export const Text = styled.p`
	opacity: ${(props) => (props.opacity ? props.opacity : "1")};
`;
export const InputGroup = styled.section`
	width: 50%;
	margin: 0 auto;
	padding: 10px;
	display: flex;
	flex-direction: column;
	gap: 15px;

	align-items: center;
	justify-content: center;
`;
export const Input = styled.input`
	padding: 10px 5px;
	width: 80%;
`;
export const Button = styled.button`
	padding: 10px 20px;
	width: 80%;
	font-size: 16px;
	background-color: #1b5e20;
	color: white;
	font-weight: 800;
	border: none;
	cursor: pointer;
	box-shadow: 0px 2px 3px 1px rgba(0, 0, 0, 0.3);
	transition: background-color 0.3s;
	&:hover {
		background-color: #4c8c4a;
		transition: background-color 0.3s;
	}
`;
export const Footer = styled.footer`
    width: 100%;
    position: absolute;
    bottom: 30px;
    text-align: center;
`;
