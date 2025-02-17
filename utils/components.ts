export function Notif(message: string,rest = {}) {
    const toast = useToast()
    toast.add({ title: message, ...rest})
}