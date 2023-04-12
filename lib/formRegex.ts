const formRegex = {
    fname: /^[a-zA-Z']{3,}(\s[a-zA-Z']*){0,2}\s*$/,
    email: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
    price: /^[0-9]\d*(\.\d+)?$/,
    desc: /([^\r]{20,})/,
}

export default formRegex;