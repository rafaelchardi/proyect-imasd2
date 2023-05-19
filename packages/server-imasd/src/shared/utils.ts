export const delay = (milliseconds)=>{
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}
export  const extractTokenFromHeader=(request: Request): string | undefined =>{
    const [type, token] = request.headers['authorization']?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }