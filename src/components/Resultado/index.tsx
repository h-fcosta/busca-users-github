import axios from "axios";
import { useEffect, useState } from "react";
import IUsers from "../../interfaces/IUsers";

const Resultado = () => {
	const [profile, setProfile] = useState<IUsers>();

	// useEffect(() => {
	// 	axios
	// 		.get<IUsers>("https://api.github.com/users/h-fcosta")
	// 		.then((resposta) => {
	// 			setProfile(resposta.data);
	// 		});
	// });

	return (
		<div className="card">
			<header className="card-header">
				<p className="card-header-title">{profile?.name}</p>
			</header>
			<div className="card-content">
				<div className="media is-align-items-center">
					<div className="media-left">
						<figure className="image is-96x96">
							<img src={profile?.avatar_url} alt="" className="is-rounded" />
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
							Seguindo: {profile?.following} | Seguidores: {profile?.followers}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Resultado;
