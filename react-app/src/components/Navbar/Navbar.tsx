import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import { State } from "redux-lib";
import { store } from "../../state/Store";

function Navbar() {
  const [state, setState] = useState<State>();

  useEffect(() => {
    setState(store.getState());
    store.subscribe(() => {
      setState(store.getState());
    });
  }, []);

  return (
    <nav className={styles.container}>
      <p>Application</p>
      {state && <img src={state?.user.profilePhoto} />}
    </nav>
  );
}

export default Navbar;
