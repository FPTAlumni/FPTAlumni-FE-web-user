const axiosInterceptor  = (instance) => {
    const parseError = (messages) => {
        if (messages) {
            if (messages instanceof Array) {
                return Promise.reject({ messages: messages });
            } else {
                return Promise.reject({ messages: [messages] });
            }
        } else {
            return Promise.reject({ messages: ["An error has occured"]});
        }
    };

    const parseBody = (response) => {
        if (response.status === 200) {
            return response.data;
        } else if (response.status === 204) {
            return response.data;
        } else if (response.status === 201) {
            return response.data;
        }
        else {
            return parseError(response.data.messages);
        }
    };

    //request header
    instance.interceptors.request.use(
        (config) => {
            const apiToken = sessionStorage.getItem("token");
            if (apiToken != null) {
                config.headers = { Authorization: "Bearer " + apiToken };
            }
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    //response parse
    instance.interceptors.response.use(
        (response) => {
            return parseBody(response);
        },
        (error) => {
            console.warn("Error status", error.response.status);
            if (error.response) {
                return parseError(error.response.data);
            } else {
                return Promise.reject(error);
            }
        }
    );
    return instance;
}

export { axiosInterceptor };