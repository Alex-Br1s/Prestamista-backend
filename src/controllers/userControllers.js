const { response } = require("express");
const User = require("../models/modelUser");

const getAllUser = async (_req, res) => {
  try {
    const allUsers = await User.findAll();
    res.status(200).json(allUsers);
  } catch (error) {
    console.log({response: "Error al obtener todos los usuarios", error: error.message});
  }
};

const createUser = async (req, res) => {
  const {
    username,
    lastName,
    capitalPrestado,
    total,
    fechaPrestamo,
    fechaPago,
    modalityPayment,
    paymentMethod,
    direccion,
    totalPagado,
    pagado,
    cancelado,
  } = req.body;
  try {
    const dataUser = {
    username,
    lastName,
    capitalPrestado,
    total,
    fechaPrestamo,
    fechaPago,
    modalityPayment,
    paymentMethod,
    direccion,
    totalPagado,
    pagado,
    cancelado,
    };
    const saveUser = await User.create(dataUser);
    res.status(200).json({message: 'Usuario creado', data: saveUser});
  } catch (error) {
    res.status(500).json({ response: "Ocurrió un error al crear un usuario", error: error.message });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const {
    username,
    lastName,
    capitalPrestado,
    total,
    fechaPrestamo,
    fechaPago,
    modalityPayment,
    paymentMethod,
    direccion,
    totalPagado,
    pagado,
    cancelado,
  } = req.body;
  try {
    const dataUser = {
    username,
    lastName,
    capitalPrestado,
    total,
    fechaPrestamo,
    fechaPago,
    modalityPayment,
    paymentMethod,
    direccion,
    totalPagado,
    pagado,
    cancelado,
    };
    //?El método update devuelve un array donde el primer elemento es el número de filas afectadas (actualizadas en la db)
    const [rowsUpdated] = await User.update(dataUser, {
      where: {
        id: id,
      },
    })
    if (rowsUpdated > 0) {
      const updatedUser = await User.findByPk(id);
      res.status(202).json({ response: "Usuario editado con exito", data: updatedUser });
    } else {
      res.status(404).json({ response: "Usuario no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ response: "Ocurrió un error al actualizar un usuario", error: error.message });
  }
}

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const userDeleted = await User.destroy({where: {id}})
    res.status(200).json({ response: "Usuario eliminado con exito", data: userDeleted });
  } catch (error) {
    res.status(500).json({response: "Error al querer eliminar un usuario",error: error.message});
  }
};

const getCanceledUsers = async (_req, res) => {
  try {
    const usersCanceled = await User.findAll({
      where: {
        cancelado: true,
      },
    });
    res.status(200).json({ response: "Usuarios cancelados obtenidos", data: usersCanceled });
  } catch (error) {
    res.status(500).json({response: "Ocurrio un error al obtener los usuarios cancelados", error: error.message });
  }
};

const getUserPaymentHistory = async (_req, res) => {
  try {
    const usersPayment = await User.findAll({
      where: {
        pagado: true,
      },
    });
    res.status(200).json({ response: "Historial de usuarios pagados", data: usersPayment });
  } catch (error) {
    res.status(500).json({ response: "Error al obtener todos los usuarios pagados", error: error.message });
  }
};

const getUsersPendingPayments = async (_req, res) => {
  try {
    const pendingPayments = await User.findAll({where: {pagado: false}})
    res.status(200).json({response: 'Usuarios no pagados', data: pendingPayments})
  } catch (error) {
    res.status(500).json({response: "Error al obtener los usuarios pendientes", error: error.message });
  }
}

module.exports = {
  getAllUser,
  createUser,
  updateUser,
  deleteUser,
  getCanceledUsers,
  getUserPaymentHistory,
  getUsersPendingPayments
};
