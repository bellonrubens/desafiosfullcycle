FROM golang:alpine3.14
WORKDIR /usr/src/app
COPY . .
RUN go build desafio.go

FROM scratch
COPY --from=0 /usr/src/app .
CMD ["./desafio"]