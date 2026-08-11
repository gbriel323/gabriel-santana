# 1. Usar uma imagem oficial do Node.js
FROM node:20-alpine

# 2. Definir o diretório de trabalho dentro do container
WORKDIR /app

# 3. Copiar package.json e instalar dependências
COPY package*.json ./
RUN npm install

# 4. Copiar o restante dos arquivos do projeto
COPY . .

# 5. Expor a porta que o front-end utiliza (no caso, 5173)
EXPOSE 5173

# 6. Comando para iniciar o servidor de desenvolvimento
CMD ["npm", "run", "dev", "--", "--host"]
