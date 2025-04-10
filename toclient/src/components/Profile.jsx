import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Context } from "../main";
import { Navigate } from "react-router-dom";
import "../Styles/Profile.css"
const Profile = () => {
    const [user, setUser] = useState([]);
    const { isAuthenticated } = useContext(Context);
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const { data } = await axios.get(
                    "http://localhost:4000/api/v1/user/patient/me",
                    { withCredentials: true }
                );
                setUser(data.user);

            } catch (error) {
                toast.error(error.response.data.message);
            }
        };
      fetchUser();
    }, []);

    if (!isAuthenticated) {
        return <Navigate to={"/register"}/>;
    }
    return (
        <section className="page  doctors">
          
            <div className="banner">
            <h3 className="dt-title tp">
          <span>Your Profile</span>
        </h3>
                {isAuthenticated ? (

            
                <div className="card">
                    <img
                        src={user.profAvatar && user.profAvatar.url}
                        alt="Profile Picture"
                    />
                    <h4>{`${user.firstName} ${user.lastName}`}</h4>
                    <div className="details">
                    <p>
                            Age: <span>{user.age}</span>
                        </p>
                        <p>
                            Email: <span>{user.email}</span>
                        </p>
                        <p>
                            Phone: <span>{user.phone}</span>
                        </p>

                        

                        <p>
                            Gender: <span>{user.gender}</span>
                        </p>
                    </div>
                </div>
            

                ) : (
                <h1>No Registered Doctors Found!</h1>
        )}
            </div>
        </section>
    );
};

export default Profile;