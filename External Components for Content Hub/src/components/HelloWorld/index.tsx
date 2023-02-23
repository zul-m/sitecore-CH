export default function CreateExternalRoot(rootElement: HTMLElement){
    return {
        render(props: any){
            rootElement.innerHTML = "Hello, world!"
        },
        unmount(){
            rootElement.innerHTML = ""
        }
    }
}