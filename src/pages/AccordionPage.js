import Accordion from "../components/Accordion";

function AccordionPage (){
    const items = [
        {
            id: '1',
            label:'can i use react on a project?',
            content:'you can use React on any project you want'
        },
        {
            id: '2',
            label:'can i use Javascript on a project?',
            content:'you can use Javascript on any project you want'
        },
        {
            id: '3',
            label:'can i use Css on a project?',
            content:'you can use Css on any project you want'
        }
    ]
   return <Accordion items={items}/>
}

export default AccordionPage;