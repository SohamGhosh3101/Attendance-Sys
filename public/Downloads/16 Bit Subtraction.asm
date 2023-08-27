data segment
N1 dw 4004h
N2 dw 1001h 
Res dw ?
data ends
code segment
assume cs: code, ds: data
start:
mov ax, data
mov ds, ax
mov ax, N1
mov bx, N2
sub ax, bx
mov Res, ax
int 3
code ends
end start