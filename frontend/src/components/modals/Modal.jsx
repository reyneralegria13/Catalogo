import * as Dialog from '@radix-ui/react-dialog'

export function Modal({ open, title, onClose, children, maxWidth }) {
  return (
    <Dialog.Root open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="modal-backdrop" />
        <Dialog.Content
          className="modal-box"
          aria-label={title}
          style={maxWidth ? { maxWidth } : undefined}
        >
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
