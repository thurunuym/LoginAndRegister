import styles from "./styles.main.css";

const Main = () => {
	
	return (
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>Welcome</h1>
				<button className={styles.white_btn} >
					Logout
				</button>
			</nav>
		</div>
	);
};

export default Main;
