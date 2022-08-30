import axios from "axios";
import { useEffect, useState } from "react";
import IUsers from "../../interfaces/IUsers";

const Busca = () => {
	const [busca, setBusca] = useState("");
	const [profile, setProfile] = useState<IUsers>();

	const buscar = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		carregarDados(`https://api.github.com/users/${busca}`);
	};

	const carregarDados = (url: string) => {
		axios.get(url).then((res) => {
			setProfile(res.data);
		});
	};

	return (
		<>
			<form onSubmit={buscar}>
				<div className="columns">
					<div className="column is-four-fifths">
						<input
							type="text"
							className="input is-rounded is-hovered"
							placeholder="Digite um usuário do GitHub"
							value={busca}
							onChange={(e) => setBusca(e.target.value)}
						/>
					</div>
					<div className="column">
						<button className="button is-info" type="submit">
							Pesquisar
						</button>
					</div>
				</div>
			</form>

			<div className="columns">
				<div className="column is-half is-offset-one-quarter">
					<div className="card">
						<header className="card-header">
							<p className="card-header-title">{profile?.name}</p>
						</header>
						<div className="card-content">
							<div className="media is-align-items-center">
								<div className="media-left">
									<figure className="image is-96x96">
										<img
											src={profile?.avatar_url}
											alt=""
											className="is-rounded"
										/>
									</figure>
								</div>
								<div className="media-content">
									<p className="title is-4">
										Usuário:{" "}
										<a href={profile?.html_url} target="_blank">
											{profile?.login}
										</a>
									</p>
									<p className="subtitle is-6">
										Seguindo: {profile?.following} | Seguidores:{" "}
										{profile?.followers}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Busca;
