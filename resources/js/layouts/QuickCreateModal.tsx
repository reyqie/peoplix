import { IconCheck } from '../components/Icons';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Modal from '../components/ui/Modal';
import { useToast } from '../components/ui/Toast';

export default function QuickCreateModal({ open, onClose }: { open: boolean; onClose: () => void }) {
    const toast = useToast();

    return (
        <Modal
            open={open}
            onClose={onClose}
            title="Quick create"
            description="Add a new employee to your workspace."
            footer={
                <>
                    <Button variant="ghost" onClick={onClose}>
                        Cancel
                    </Button>
                    <Button
                        onClick={() => {
                            onClose();
                            toast.push({
                                title: 'Employee created',
                                message: 'Onboarding checklist has been sent by email.',
                                variant: 'success',
                            });
                        }}
                    >
                        <IconCheck className="size-4" />
                        Create employee
                    </Button>
                </>
            }
        >
            <div className="grid gap-3 pb-4">
                <Input label="Full name" placeholder="e.g. Sarah Wijaya" />
                <Input label="Work email" placeholder="name@peoplix.id" hint="Invite will be sent to this address." />
                <Input label="Department" placeholder="Engineering" />
            </div>
        </Modal>
    );
}
