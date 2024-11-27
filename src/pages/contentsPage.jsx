import { Button } from "@mui/material";
import { QueryClient, useQuery, useQueryClient } from "react-query";
import { Input } from "@/components/ui/Input";
import { useMutation } from "react-query";
import ContentComponent from "../components/content-component";
import { getContentAPI, postContentAPI } from "../API/contentAPI";
import { useEffect, useRef, useState } from "react"
import reloader from "react"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

export default function ContentsPage() {
    const [reloader, setReloader] = useState(false)
    const [open, setOpen] = useState(false);
    const contentnameref = useRef(null);
    const contentstatusref = useRef(null);
    const contentmissingpartsref = useRef(null);
    const contentdefectivepartsref = useRef(null);

    const queryClient = useQueryClient()
    const { data: contents } = useQuery({
        queryFn: getContentAPI, queryKey: ['contents'],
    });

    console.log(contents);

    // useEffect(() => {
    //     getContentAPI()
    //     .then(res =>{
    //         if(res.ok){
    //             postContentAPI(res.data)
    //         }
    //     })
    // }, [reloader])
    
    const addContentMutation = useMutation({
        mutationFn: postContentAPI,
        onSuccess: (data) => {  
            console.log(data)
            setOpen(false)
            QueryClient.invalidateQueries(['contents'])
        }
    });

    const handleSubmit = () => {
        const formData = new FormData();
        formData.append('name', contentnameref.current.value);
        formData.append('status', contentstatusref.current.value);
        formData.append('missing_parts', contentmissingpartsref.current.value);
        formData.append('defective_parts', contentdefectivepartsref.current.value);
        console.log('submit btn', formData);
        addContentMutation.mutate(formData);
    }
    return (
        <main className="flex-1 min-h-o p-5">
          
            <section className="flex flex-col gap-3 ">
                <table className="table-auto">
                    <thead>
                        <tr className="text-left ">
                            <th>Name</th>
                            <th>Status</th>
                            <th>Missing Parts</th>
                            <th>Defective Part</th>
                            <th> <Button onClick={() => setOpen(true)}>Add</Button></th>
                        </tr>
                    </thead>
                    <tbody>
                        {contents?.data.map((item) => (<tr key={item.id} data={item} >
                            <td>{item.name}</td>
                            <td>{item.status}</td>
                            <td>{item.missing_parts}</td>
                            <td>{item.defective_parts}</td>
                            <td className="flex gap-3">
                                <Button>Edit</Button>
                                <Button>Delete</Button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>

            </section>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Add Content</DialogTitle>
                        <DialogDescription>
                            <div className=" flex gap-2 flex-col">
                                <Input type="text" placeholder="Content Name" ref={contentnameref} />
                                <Input type="text" placeholder="Content Status" ref={contentstatusref} />
                                <Input type="text" placeholder="Content Missing Parts" ref={contentmissingpartsref} />
                                <Input type="text" placeholder="Content Defective Parts" ref={contentdefectivepartsref} />
                            </div>
                            <Button onClick={handleSubmit}>Submit</Button>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </main>
    )
}