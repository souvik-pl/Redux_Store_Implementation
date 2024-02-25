import { useState, useEffect, useRef, ChangeEvent } from "react";
import { Action, State } from "redux-lib";
import { store } from "../../state/Store";
import styles from "./Profile.module.css";
import { USER_ACTIONS } from "../../state/ActionList";

function Profile() {
  const [state, setState] = useState<State>();
  const uploadButtonRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setState(store.getState());
    store.subscribe(() => {
      setState(store.getState());
    });
  }, []);

  function uploadButtonClickHandler() {
    uploadButtonRef.current?.click();
  }

  function uploadFileHandler(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.files) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (loadEvent) => {
        const action: Action = {
          type: USER_ACTIONS.UPDATE_PHOTO,
          payload: {
            profilePhoto: loadEvent.target?.result as string,
          },
        };

        store.dispatch(action);
      };
    }
  }

  return (
    <div className={styles.container}>
      <header className={styles.page_title}>Profile</header>
      <main className={styles.main}>
        <section className={styles.left_section}>
          <div className={styles.image_conatiner}>
            {state && <img className={styles.image} src={state?.user.profilePhoto} />}
          </div>
          <button className={styles.update_btn} onClick={uploadButtonClickHandler}>
            Update Profile Photo
          </button>
          <input
            ref={uploadButtonRef}
            type="file"
            accept="image/*"
            hidden
            onChange={uploadFileHandler}
          />
        </section>
        <section className={styles.right_section}>
          <div className={styles.info_container}>
            <label className={styles.info_label}>Name</label>
            <p className={styles.info_value}>{state?.user.name}</p>
          </div>
          <div className={styles.info_container}>
            <label className={styles.info_label}>Email</label>
            <p className={styles.info_value}>{state?.user.email}</p>
          </div>
          <div className={styles.info_container}>
            <label className={styles.info_label}>Contact</label>
            <p className={styles.info_value}>{state?.user.contact}</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Profile;
