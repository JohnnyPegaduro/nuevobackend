class Container {
    constructor(array) {
        this.array = array;
    }

    async save(object) {
        // ? Recibe un objeto, lo guarda en el array y devuelve el id asignado

        try {
            // const dataToParse = await fs.promises.readFile(this.array, "utf-8");
            // const dataParsed = JSON.parse(dataToParse);
            // * ¿El producto ya existe en el archivo?
            const productFound = this.array.find(
                ({
                    title
                }) => title === object.title
            );

            if (productFound) {
                // * Si el producto ya existe, retorna null
                return null;
            } else {
                // * Si no existe, lo agrega y retorna el objeto con id asignado
                object.id = this.array.length + 1;
                this.array.push(object);
                // const updatedFile = JSON.stringify(dataParsed, null, " ");
                // fs.promises.writeFile(this.array, updatedFile);
                return object;
            }
        } catch (error) {
            console.error(`Se produjo un error en save:${error}`);
        }
    }

    async getById(idEntered) {
        // ? Recibe un id y devuelve el objeto con ese id, o null si no está

        try {
            // const dataToParse = await fs.promises.readFile(this.array, "utf-8");
            // const dataParsed = JSON.parse(dataToParse);
            // * ¿El producto ya existe en el archivo?
            const idFound = this.array.find(({
                id
            }) => id == idEntered);

            if (idFound) {
                console.log(`Se obtuvo el producto ${idFound.title}`);
                return idFound;
            } else {
                console.log("No se han encontrado productos");
            }
        } catch (error) {
            console.error(`Se produjo un error en getByID: ${error}`);
        }
    }

    async getAll() {
        // ? Devuelve un array con los objetos presentes en el archivo

        try {
            // const dataToParse = await fs.promises.readFile(this.array, "utf-8");
            // const dataParsed = JSON.parse(dataToParse);

            if (this.array.length > 0) {
                // console.log(this.array);
                return this.array;
            } else {
                console.log("No hay elementos disponibles");
            }
        } catch (error) {
            console.error(`Se ha producido un error en getAll: ${error}`);
        }
    }

    async deleteById(idEntered) {
        // ? Elimina del archivo el objeto con el Id buscado
        try {
            // const dataToParse = await fs.promises.readFile(this.array, "utf-8");
            // const dataParsed = JSON.parse(dataToParse);
            // * Se filtran los productos que no cumplen las condiciones (coincidir con el id proporcionado)
            const leakedID = this.array.filter(({
                id
            }) => id != idEntered);
            // * Encuentra el producto con el id proporcionado
            const idFound = this.array.find(({
                id
            }) => id == idEntered);

            if (idFound) {
                console.log(
                    `Se ha eliminado el objeto con id:${idEntered} >> [[${idFound.title}]]`
                );
                // * Se actualiza el archivo
                // const updatedFile = JSON.stringify(leakedID, null, " ");
                // fs.promises.writeFile(this.array, updatedFile);
                this.array = leakedID
                return idFound;
            } else {
                console.log(`No se ha encontrado el objeto con id: ${idEntered}`);
            }
        } catch (error) {
            console.error(`Se ha producido un error en deleteById: ${error}`);
        }
    }

    async deleteAll() {
        // ? Elimina todos los objetos presentes en el archivo
        try {
            console.log("Todos los objetos fueron eliminados");
            // * Borrado de todos los objetos (Se sobreescribe el archivo a un array vacío)
            await fs.promises.writeFile(this.array, "[]");
        } catch (error) {
            console.error(`Se ha producido un error en deleteAll: ${error}`);
        }
    }
}

module.exports = Container;