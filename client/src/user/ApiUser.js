export const read = (userId,token) => {
    return fetch(`https://booksharingapp23.herokuapp.com/api/user/${userId}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization : `Bearer ${token}`
        },
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
};


export const update = (userId,token,user) => {
    return fetch(`https://booksharingapp23.herokuapp.com/api/user/${userId}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization : `Bearer ${token}`
        },
        body:JSON.stringify(user)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
};
export const updateUser=(user,next)=>{
    if(typeof(window)!=="undefined"){
        if(localStorage.getItem('jwt')){
            let auth=JSON.parse(localStorage.getItem('jwt'));
            auth.user=user;
            localStorage.setItem('jwt',JSON.stringify(auth));
            next();
        }  
    }          
}


export const getPurchaseHistory = (userId,token) => {
    return fetch(`https://booksharingapp23.herokuapp.com/api/orders/by/user/${userId}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization : `Bearer ${token}`
        },
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
};

export const getCurrentBooks = (userId,token) => {    
    return fetch(`https://booksharingapp23.herokuapp.com/api/user/getCurrentBooks/${userId}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
};

export const getListedBooks = (userId,token) => {    
    return fetch(`https://booksharingapp23.herokuapp.com/api/user/getListedBooks/${userId}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
};

export const listBook = (userId,isbn,token) => {    
    return fetch(`https://booksharingapp23.herokuapp.com/api/user/listBook/${userId}/${isbn}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization : `Bearer ${token}`
        },
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
};

export const unlistBook = (userId,isbn,token) => {    
    return fetch(`https://booksharingapp23.herokuapp.com/api/user/backFromListBook/${userId}/${isbn}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization : `Bearer ${token}`
        },
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
};


export const addBook = (userId,isbn,token) => {    
    return fetch(`https://booksharingapp23.herokuapp.com/api/addISBN/${userId}/${isbn}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
};


export const deleteBook = (userId,isbn,token) => {    
    return fetch(`https://booksharingapp23.herokuapp.com/api/deleteBook/${userId}/${isbn}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
};

export const borrowBook = (userId,isbn,ownerId,token) => {    
    return fetch(`https://booksharingapp23.herokuapp.com/api/borrowRequest/${userId}/${ownerId}/${isbn}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
};

export const getBorrowBookRequests = (userId,token) => {    
    return fetch(`https://booksharingapp23.herokuapp.com/api/user/getBorrowBookRequests/${userId}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
};


export const acceptBorrowRequest = (userId,isbn,ownerId,token) => {    
    return fetch(`https://booksharingapp23.herokuapp.com/api/acceptRequest/${userId}/${ownerId}/${isbn}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
};
export const declineBorrowRequest = (userId,isbn,ownerId,token) => {    
    return fetch(`https://booksharingapp23.herokuapp.com/api/declineRequest/${userId}/${ownerId}/${isbn}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
};
