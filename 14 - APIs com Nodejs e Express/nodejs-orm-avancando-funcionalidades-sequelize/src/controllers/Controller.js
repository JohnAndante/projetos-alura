class Controller {
    constructor(entidadeService) {
        this.entidadeService = entidadeService;
    }

    async getAll(req, res) {
        try {
            const dataList = await this.entidadeService.getAll();
            return res.status(200).json({ data: dataList, metadata: { total: dataList.length } });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    async getById(req, res) {
        try {
            const { id } = req.params;
            const data = await this.entidadeService.getById(id);

            if (!data) {
                return res.status(404).json({ message: `Register with id ${id} not found` });
            }

            return res.status(200).json({ data: data });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    async create(req, res) {
        try {
            const data = req.body;
            const newData = await this.entidadeService.create(data);

            return res.status(201).json({ data: newData });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params;
            const dataToUpdate = req.body;

            const didUpdate = await this.entidadeService.update(dataToUpdate, Number(id));

            if (!didUpdate) {
                return res.status(400).json({ message: `Register with id ${id} not found or not updated.` });
            }

            return res.status(200).json({ message: `Register with id ${id} updated successfully.` });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params;
            const didDelete = await this.entidadeService.delete(Number(id));

            if (!didDelete) {
                return res.status(400).json({ message: `Register with id ${id} not found or not deleted.` });
            }

            return res.status(200).json({ message: `Register with id ${id} deleted successfully.` });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = Controller;
