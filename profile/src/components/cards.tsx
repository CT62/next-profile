interface Props{
    Name: string,
    Img: string,
    link: string,
}

export default function Card({Name,Img,link}: Props){
    return (
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                <article className="bg-white overflow-hidden rounded-lg shadow-lg">
                    <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                        <a className="flex items-center no-underline text-black" href={link}>
                            <img alt="Placeholder" className="h-10 w-10 block " src={Img} />
                            <p className="ml-2 text-sm font-medium px-3">
                                {Name}
                            </p>
                        </a>
                    </footer>
    
                </article>
                
    
            </div>
            
            
    );

    } 
