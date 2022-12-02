import { Button, Flex, Modal, Text } from "@mantine/core";

interface DeleteModalProps {
  open?: boolean;
  item: string;
  onClose: () => void;
  onConfirm: () => void;
}

export default function DeleteModal({
  open,
  item,
  onClose,
  onConfirm
}: DeleteModalProps) {
  return (
    <Modal
      centered
      opened={open ?? false}
      title={`Delete ${item}?`}
      onClose={onClose}
      size="sm"
    >
      <Text my="md">
        Are you sure you want to delete this {item}? This action cannot be
        undone
      </Text>

      <Flex justify="end">
        <Button mr="xs" variant="outline" onClick={onClose}>
          Cancel
        </Button>
        <Button onClick={onConfirm}>Delete</Button>
      </Flex>
    </Modal>
  );
}
