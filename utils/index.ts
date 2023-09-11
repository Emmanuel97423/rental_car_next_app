export const getYear =()=>{
    const year = new Date(Date.now()).getFullYear();
    return year.toString();
}