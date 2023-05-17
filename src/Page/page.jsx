import React, { useState } from "react";
import styled from "./page.module.scss";
import { AccountCircle } from "@mui/icons-material";
import data from "../assets/data.json";

export default function ScorePage() {
	const [text, setText] = useState(JSON.stringify(data, null, 2));
	function handleChange(text, event) {
		try {
			setText(text && JSON.parse(text));
		} catch (error) {}
	}
	const handleSaveToPC = (jsonData, data) => {
		const fileData = JSON.stringify(jsonData);
		const blob = new Blob([fileData], { type: "text/plain" });
		const url = URL.createObjectURL(blob);
		const link = document.createElement("mahasiswa_1");
		link.download = `${data}.json`;
		link.href = url;
		link.click();
	};
	return (
		<div className={styled.scorePage}>
			<div className={styled.scorePageContainer}>
				<div className={styled.peopleIndex}>
					<div className={styled.peopleUser}>
						<AccountCircle sx={{ fontSize: "3rem" }} />
						<h1 className={styled.peopleName}>Mahasiswa 1</h1>
					</div>
					<div className={styled.peopleScoreContainer}>
						<div className={styled.peopleScore}>
							<h1 className={styled.inputName}>Aspek Penilaian 1</h1>
							<input
								className={styled.scoreInput}
								onChange={handleChange}
								placeholder="Aspek Penilaian 1"
								type="number"
								name="aspek_penilaian1"
								id=""
								min={0}
								max={10}
							/>
						</div>
						<div className={styled.peopleScore}>
							<h1 className={styled.inputName}>Aspek Penilaian 2</h1>
							<input
								className={styled.scoreInput}
								placeholder="Aspek Penilaian 2"
								type="number"
								name=""
								id=""
								min={0}
								max={10}
							/>
						</div>
						<div className={styled.peopleScore}>
							<h1 className={styled.inputName}>Aspek Penilaian 3</h1>
							<input
								className={styled.scoreInput}
								placeholder="Aspek Penilaian 3"
								type="number"
								name=""
								id=""
								min={0}
								max={10}
							/>
						</div>
						<div className={styled.peopleScore}>
							<h1 className={styled.inputName}>Aspek Penilaian 4</h1>
							<input
								className={styled.scoreInput}
								placeholder="Aspek Penilaian 4"
								type="number"
								name=""
								id=""
								min={0}
								max={10}
							/>
						</div>
					</div>
				</div>
				<div className={styled.peopleIndex}>
					<div className={styled.peopleUser}>
						<AccountCircle sx={{ fontSize: "3rem" }} />
						<h1 className={styled.peopleName}>Mahasiswa 2</h1>
					</div>
					<div className={styled.peopleScoreContainer}>
						<div className={styled.peopleScore}>
							<h1 className={styled.inputName}>Aspek Penilaian 1</h1>
							<input
								className={styled.scoreInput}
								onChange={handleChange}
								placeholder="Aspek Penilaian 1"
								type="number"
								name="aspek_penilaian1"
								id=""
								min={0}
								max={10}
							/>
						</div>
						<div className={styled.peopleScore}>
							<h1 className={styled.inputName}>Aspek Penilaian 2</h1>
							<input
								className={styled.scoreInput}
								placeholder="Aspek Penilaian 2"
								type="number"
								name=""
								id=""
								min={0}
								max={10}
							/>
						</div>
						<div className={styled.peopleScore}>
							<h1 className={styled.inputName}>Aspek Penilaian 3</h1>
							<input
								className={styled.scoreInput}
								placeholder="Aspek Penilaian 3"
								type="number"
								name=""
								id=""
								min={0}
								max={10}
							/>
						</div>
						<div className={styled.peopleScore}>
							<h1 className={styled.inputName}>Aspek Penilaian 4</h1>
							<input
								className={styled.scoreInput}
								placeholder="Aspek Penilaian 4"
								type="number"
								name=""
								id=""
								min={0}
								max={10}
							/>
						</div>
					</div>
				</div>
				<div className={styled.peopleIndex}>
					<div className={styled.peopleUser}>
						<AccountCircle sx={{ fontSize: "3rem" }} />
						<h1 className={styled.peopleName}>Mahasiswa 3</h1>
					</div>
					<div className={styled.peopleScoreContainer}>
						<div className={styled.peopleScore}>
							<h1 className={styled.inputName}>Aspek Penilaian 1</h1>
							<input
								className={styled.scoreInput}
								onChange={handleChange}
								placeholder="Aspek Penilaian 1"
								type="number"
								name="aspek_penilaian1"
								id=""
								min={0}
								max={10}
							/>
						</div>
						<div className={styled.peopleScore}>
							<h1 className={styled.inputName}>Aspek Penilaian 2</h1>
							<input
								className={styled.scoreInput}
								placeholder="Aspek Penilaian 2"
								type="number"
								name=""
								id=""
								min={0}
								max={10}
							/>
						</div>
						<div className={styled.peopleScore}>
							<h1 className={styled.inputName}>Aspek Penilaian 3</h1>
							<input
								className={styled.scoreInput}
								placeholder="Aspek Penilaian 3"
								type="number"
								name=""
								id=""
								min={0}
								max={10}
							/>
						</div>
						<div className={styled.peopleScore}>
							<h1 className={styled.inputName}>Aspek Penilaian 4</h1>
							<input
								className={styled.scoreInput}
								placeholder="Aspek Penilaian 4"
								type="number"
								name=""
								id=""
								min={0}
								max={10}
							/>
						</div>
					</div>
				</div>
				<div className={styled.peopleIndex}>
					<div className={styled.peopleUser}>
						<AccountCircle sx={{ fontSize: "3rem" }} />
						<h1 className={styled.peopleName}>Mahasiswa 4</h1>
					</div>
					<div className={styled.peopleScoreContainer}>
						<div className={styled.peopleScore}>
							<h1 className={styled.inputName}>Aspek Penilaian 1</h1>
							<input
								className={styled.scoreInput}
								onChange={handleChange}
								placeholder="Aspek Penilaian 1"
								type="number"
								name="aspek_penilaian1"
								id=""
								min={0}
								max={10}
							/>
						</div>
						<div className={styled.peopleScore}>
							<h1 className={styled.inputName}>Aspek Penilaian 2</h1>
							<input
								className={styled.scoreInput}
								placeholder="Aspek Penilaian 2"
								type="number"
								name=""
								id=""
								min={0}
								max={10}
							/>
						</div>
						<div className={styled.peopleScore}>
							<h1 className={styled.inputName}>Aspek Penilaian 3</h1>
							<input
								className={styled.scoreInput}
								placeholder="Aspek Penilaian 3"
								type="number"
								name=""
								id=""
								min={0}
								max={10}
							/>
						</div>
						<div className={styled.peopleScore}>
							<h1 className={styled.inputName}>Aspek Penilaian 4</h1>
							<input
								className={styled.scoreInput}
								placeholder="Aspek Penilaian 4"
								type="number"
								name=""
								id=""
								min={0}
								max={10}
							/>
						</div>
					</div>
				</div>
				<div className={styled.peopleIndex}>
					<div className={styled.peopleUser}>
						<AccountCircle sx={{ fontSize: "3rem" }} />
						<h1 className={styled.peopleName}>Mahasiswa 5</h1>
					</div>
					<div className={styled.peopleScoreContainer}>
						<div className={styled.peopleScore}>
							<h1 className={styled.inputName}>Aspek Penilaian 1</h1>
							<input
								className={styled.scoreInput}
								onChange={handleChange}
								placeholder="Aspek Penilaian 1"
								type="number"
								name="aspek_penilaian1"
								id=""
								min={0}
								max={10}
							/>
						</div>
						<div className={styled.peopleScore}>
							<h1 className={styled.inputName}>Aspek Penilaian 2</h1>
							<input
								className={styled.scoreInput}
								placeholder="Aspek Penilaian 2"
								type="number"
								name=""
								id=""
								min={0}
								max={10}
							/>
						</div>
						<div className={styled.peopleScore}>
							<h1 className={styled.inputName}>Aspek Penilaian 3</h1>
							<input
								className={styled.scoreInput}
								placeholder="Aspek Penilaian 3"
								type="number"
								name=""
								id=""
								min={0}
								max={10}
							/>
						</div>
						<div className={styled.peopleScore}>
							<h1 className={styled.inputName}>Aspek Penilaian 4</h1>
							<input
								className={styled.scoreInput}
								placeholder="Aspek Penilaian 4"
								type="number"
								name=""
								id=""
								min={0}
								max={10}
							/>
						</div>
					</div>
				</div>
				<div className={styled.peopleIndex}>
					<div className={styled.peopleUser}>
						<AccountCircle sx={{ fontSize: "3rem" }} />
						<h1 className={styled.peopleName}>Mahasiswa 6</h1>
					</div>
					<div className={styled.peopleScoreContainer}>
						<div className={styled.peopleScore}>
							<h1 className={styled.inputName}>Aspek Penilaian 1</h1>
							<input
								className={styled.scoreInput}
								onChange={handleChange}
								placeholder="Aspek Penilaian 1"
								type="number"
								name="aspek_penilaian1"
								id=""
								min={0}
								max={10}
							/>
						</div>
						<div className={styled.peopleScore}>
							<h1 className={styled.inputName}>Aspek Penilaian 2</h1>
							<input
								className={styled.scoreInput}
								placeholder="Aspek Penilaian 2"
								type="number"
								name=""
								id=""
								min={0}
								max={10}
							/>
						</div>
						<div className={styled.peopleScore}>
							<h1 className={styled.inputName}>Aspek Penilaian 3</h1>
							<input
								className={styled.scoreInput}
								placeholder="Aspek Penilaian 3"
								type="number"
								name=""
								id=""
								min={0}
								max={10}
							/>
						</div>
						<div className={styled.peopleScore}>
							<h1 className={styled.inputName}>Aspek Penilaian 4</h1>
							<input
								className={styled.scoreInput}
								placeholder="Aspek Penilaian 4"
								type="number"
								name=""
								id=""
								min={0}
								max={10}
							/>
						</div>
					</div>
				</div>
				<div className={styled.peopleIndex}>
					<div className={styled.peopleUser}>
						<AccountCircle sx={{ fontSize: "3rem" }} />
						<h1 className={styled.peopleName}>Mahasiswa 7</h1>
					</div>
					<div className={styled.peopleScoreContainer}>
						<div className={styled.peopleScore}>
							<h1 className={styled.inputName}>Aspek Penilaian 1</h1>
							<input
								className={styled.scoreInput}
								onChange={handleChange}
								placeholder="Aspek Penilaian 1"
								type="number"
								name="aspek_penilaian1"
								id=""
								min={0}
								max={10}
							/>
						</div>
						<div className={styled.peopleScore}>
							<h1 className={styled.inputName}>Aspek Penilaian 2</h1>
							<input
								className={styled.scoreInput}
								placeholder="Aspek Penilaian 2"
								type="number"
								name=""
								id=""
								min={0}
								max={10}
							/>
						</div>
						<div className={styled.peopleScore}>
							<h1 className={styled.inputName}>Aspek Penilaian 3</h1>
							<input
								className={styled.scoreInput}
								placeholder="Aspek Penilaian 3"
								type="number"
								name=""
								id=""
								min={0}
								max={10}
							/>
						</div>
						<div className={styled.peopleScore}>
							<h1 className={styled.inputName}>Aspek Penilaian 4</h1>
							<input
								className={styled.scoreInput}
								placeholder="Aspek Penilaian 4"
								type="number"
								name=""
								id=""
								min={0}
								max={10}
							/>
						</div>
					</div>
				</div>
				<div className={styled.peopleIndex}>
					<div className={styled.peopleUser}>
						<AccountCircle sx={{ fontSize: "3rem" }} />
						<h1 className={styled.peopleName}>Mahasiswa 8</h1>
					</div>
					<div className={styled.peopleScoreContainer}>
						<div className={styled.peopleScore}>
							<h1 className={styled.inputName}>Aspek Penilaian 1</h1>
							<input
								className={styled.scoreInput}
								onChange={handleChange}
								placeholder="Aspek Penilaian 1"
								type="number"
								name="aspek_penilaian1"
								id=""
								min={0}
								max={10}
							/>
						</div>
						<div className={styled.peopleScore}>
							<h1 className={styled.inputName}>Aspek Penilaian 2</h1>
							<input
								className={styled.scoreInput}
								placeholder="Aspek Penilaian 2"
								type="number"
								name=""
								id=""
								min={0}
								max={10}
							/>
						</div>
						<div className={styled.peopleScore}>
							<h1 className={styled.inputName}>Aspek Penilaian 3</h1>
							<input
								className={styled.scoreInput}
								placeholder="Aspek Penilaian 3"
								type="number"
								name=""
								id=""
								min={0}
								max={10}
							/>
						</div>
						<div className={styled.peopleScore}>
							<h1 className={styled.inputName}>Aspek Penilaian 4</h1>
							<input
								className={styled.scoreInput}
								placeholder="Aspek Penilaian 4"
								type="number"
								name=""
								id=""
								min={0}
								max={10}
							/>
						</div>
					</div>
				</div>
				<div className={styled.peopleIndex}>
					<div className={styled.peopleUser}>
						<AccountCircle sx={{ fontSize: "3rem" }} />
						<h1 className={styled.peopleName}>Mahasiswa 9</h1>
					</div>
					<div className={styled.peopleScoreContainer}>
						<div className={styled.peopleScore}>
							<h1 className={styled.inputName}>Aspek Penilaian 1</h1>
							<input
								className={styled.scoreInput}
								onChange={handleChange}
								placeholder="Aspek Penilaian 1"
								type="number"
								name="aspek_penilaian1"
								id=""
								min={0}
								max={10}
							/>
						</div>
						<div className={styled.peopleScore}>
							<h1 className={styled.inputName}>Aspek Penilaian 2</h1>
							<input
								className={styled.scoreInput}
								placeholder="Aspek Penilaian 2"
								type="number"
								name=""
								id=""
								min={0}
								max={10}
							/>
						</div>
						<div className={styled.peopleScore}>
							<h1 className={styled.inputName}>Aspek Penilaian 3</h1>
							<input
								className={styled.scoreInput}
								placeholder="Aspek Penilaian 3"
								type="number"
								name=""
								id=""
								min={0}
								max={10}
							/>
						</div>
						<div className={styled.peopleScore}>
							<h1 className={styled.inputName}>Aspek Penilaian 4</h1>
							<input
								className={styled.scoreInput}
								placeholder="Aspek Penilaian 4"
								type="number"
								name=""
								id=""
								min={0}
								max={10}
							/>
						</div>
					</div>
				</div>
				<div className={styled.peopleIndex}>
					<div className={styled.peopleUser}>
						<AccountCircle sx={{ fontSize: "3rem" }} />
						<h1 className={styled.peopleName}>Mahasiswa 10</h1>
					</div>
					<div className={styled.peopleScoreContainer}>
						<div className={styled.peopleScore}>
							<h1 className={styled.inputName}>Aspek Penilaian 1</h1>
							<input
								className={styled.scoreInput}
								onChange={handleChange}
								placeholder="Aspek Penilaian 1"
								type="number"
								name="aspek_penilaian1"
								id=""
								min={0}
								max={10}
							/>
						</div>
						<div className={styled.peopleScore}>
							<h1 className={styled.inputName}>Aspek Penilaian 2</h1>
							<input
								className={styled.scoreInput}
								placeholder="Aspek Penilaian 2"
								type="number"
								name=""
								id=""
								min={0}
								max={10}
							/>
						</div>
						<div className={styled.peopleScore}>
							<h1 className={styled.inputName}>Aspek Penilaian 3</h1>
							<input
								className={styled.scoreInput}
								placeholder="Aspek Penilaian 3"
								type="number"
								name=""
								id=""
								min={0}
								max={10}
							/>
						</div>
						<div className={styled.peopleScore}>
							<h1 className={styled.inputName}>Aspek Penilaian 4</h1>
							<input
								className={styled.scoreInput}
								placeholder="Aspek Penilaian 4"
								type="number"
								name=""
								id=""
								min={0}
								max={10}
							/>
						</div>
					</div>
				</div>
				<button onClick={handleSaveToPC} type="submit">
					Simpan
				</button>
			</div>
		</div>
	);
}
