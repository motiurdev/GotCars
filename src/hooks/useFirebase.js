import initializeAuthentication from "../pages/Login/Firebase/firebase.init"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";


initializeAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [authError, setAuthError] = useState("")
    const [isLoading, setIsLoading] = useState(true)
    const [admin, setAdmin] = useState(false)

    const auth = getAuth();

    const registerUser = (email, password, name, history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const newUser = { email, displayName: name }
                setUser(newUser)
                // save user to the database
                saveUser(email, name)
                alert("Successfully Register")
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    // Profile updated!
                    // ...
                }).catch((error) => {
                    // An error occurred
                    // ...
                });
                history.replace('/')
                setAuthError("")
            })
            .catch((error) => {
                setAuthError(error.message)
            })
            .finally(() => setIsLoading(false))

    }


    const loginUser = (email, password, location, history) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || "/"
                history.replace(destination)
                setAuthError("")
                alert("Successfully Login")
            })
            .catch((error) => {
                setAuthError(error.message)
            })
            .finally(() => setIsLoading(false))
    }

    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false))
    }

    useEffect(() => {
        const unsubcribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubcribed;
    }, [auth])

    const saveUser = (email, displayName) => {
        const user = { email, displayName }
        fetch("https://evening-retreat-05338.herokuapp.com/user", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }

    useEffect(() => {
        fetch(`https://evening-retreat-05338.herokuapp.com/user/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])


    return {
        user,
        authError,
        admin,
        isLoading,
        registerUser,
        loginUser,
        logOut,
    }
}

export default useFirebase;