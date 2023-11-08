export const Checkvalidata = (email,password,fullname) => {
    const isEmailvalid = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(email)
    const isPasswordvalid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const isFullnamevalid =/(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/.test(fullname);
    
    if (!isFullnamevalid) return "Full name is not valid";
    if (!isEmailvalid) return "Email Id is not valid";
    if (!isPasswordvalid) return "Password is not valid";

    return null
}