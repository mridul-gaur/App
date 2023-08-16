import { firebaseAuth, firebaseDb } from "src/boot/firebase"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth"

const state = {
    userDetails: {

    }
}

const mutations = {
    setUserDetails(state, payload) {
        state.userDetails = payload
    }
}

const actions = {
    registerUser({ }, payload) {
        createUserWithEmailAndPassword(payload.email, payload.password)
            .then(response => {
                console.log(response)
                let userId = firebaseAuth.currentUser.uid
                firebaseDb.ref('users/' + userId).set({
                    name: payload.name,
                    email: payload.email,
                    online: true
                })
            })
            .catch(error => {
                console.log(error.message)
            })

    },
    loginUser({ }, payload) {
        signInWithEmailAndPassword(payload.email, payload.password)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error.message)
            })
    },
    handleAuthStateChanged({ commit }) {
        onAuthStateChanged(user => {
            if (user) {
                // User is logged in.
                let userId = firebaseAuth.currentUser.uid
                firebaseDb.ref('users/' + userId).once('value', snapshot => {
                    let userDetails = snapshot.val()
                    commit('setUserDetails', {
                        name: userDetails.name,
                        email: userDetails.email,
                        userId: userId
                    })
                })
            }
            else {
                // User is logged out.
                commit('setUserDetails', {})
            }
        })
    }
}

const getters = {

}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}