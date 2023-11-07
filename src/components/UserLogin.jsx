import React, { useState, useEffect } from "react";
import boy from "../assets/avatar/boy1.png";
import boy2 from "../assets/avatar/boy2.png";
import oldman from "../assets/avatar/oldman.png";
import girl from "../assets/avatar/girl.png";
import { useDispatch, useSelector } from "react-redux";
import { addUserPic, addUserName } from "../features/auth";

const UserLogin = () => {
  const [userValue, setUserValue] = useState();
  const [imageValue, setImageValue] = useState();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const avatars = [girl, boy, oldman, boy2];

  useEffect(() => {
    if (auth.isLogin !== undefined && auth.imageUser !== undefined) {
      console.log(auth.imageUser);
    }
  }, [auth.isLogin, auth.imageUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUserPic(imageValue));
    dispatch(addUserName(userValue));
    console.log(auth.imageUser);
    console.log(auth.isLogin);
  };

  const handleResetValueImage = (e) => {
    e.stopPropagation();
    setImageValue(undefined);
  };

  return (
    <div className="fixed top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 z-40 text-center bg-slate-100 px-10 py-5 rounded-xl overflow-hidden">
      <h2 className="py-5 text-4xl text-green-600">Welcome to Greenstore !</h2>
      <form onSubmit={handleSubmit}>
        <p className="pt-5 text-xl text-slate-600">
          Entrez votre nom d'utilisateur :
        </p>
        <input
          value={userValue}
          onChange={(e) => setUserValue(e.target.value)}
          type="text"
          className="bg-transparent border-b-2 border-b-green-600 outline-none p-2 text-xl text-green-600"
        />
        <p className="py-5 text-xl text-slate-600 mt-5">
          Choisissez un avatar :
        </p>
        <div
          className="flex gap-5
        "
        >
          {avatars.map((avatar, index) => (
            <div
              key={index}
              className={`rounded-[50%] w-[120px] h-[120px] bg-slate-100 overflow-hidden border-2 border-green-600 relative cursor-pointer opacity-40 hover:opacity-100 duration-500 mb-5 hover:scale-[1.1] ${
                imageValue === avatar ? "scale-[1.1] opacity-100" : ""
              }
          `}
              onClick={() => setImageValue(avatar)}
            >
              {imageValue === avatar && (
                <span
                  className="hover:scale-110 absolute z-10 DM text-sm font-semibold text-slate-100 bg-green-600 w-[20px] h-[20px] rounded-[50%] flex justify-center items-center top-4 right-4"
                  onClick={handleResetValueImage}
                >
                  X
                </span>
              )}
              <img
                src={avatar}
                alt={`Avatar ${index + 1}`}
                className={`mb-[10px] absolute top-[10px] hover:scale-[1.1]  duration-300 ${
                  imageValue === avatar ? "scale-[1.1]" : ""
                }`}
              />
            </div>
          ))}
        </div>
        <button
          type="submit"
          className={`bg-green-600 text-slate-100 p-2 m-5 px-5 text-xl rounded font-semibold ${
            imageValue !== undefined && userValue.trim() !== ""
              ? "hover:scale-[1.1]"
              : ""
          } duration-300`}
        >
          {imageValue !== undefined && userValue.trim() !== ""
            ? " Connexion"
            : "Remplissez les champs 🌱"}
        </button>
      </form>
    </div>
  );
};

export default UserLogin;
