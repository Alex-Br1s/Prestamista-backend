const User = require("../models/modelUser");

const getAllUser = async (req, res) => {
  try {
    const allUsers = await User.findAll();
    return res.status(200).json(allUsers);
  } catch (error) {
    console.log("Error al obtener todos los usuarios " + error.message);
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
    paymentMethod,
    direccion,
    modalityPayment,
    grupo,
    totalPagado,
    pagado,
    cancelado,
    daysPayment,
    moneyToPayment,
  } = req.body;
  try {
    const dataUser = {
      username,
      lastName,
      capitalPrestado,
      total,
      fechaPrestamo,
      fechaPago,
      paymentMethod,
      direccion,
      modalityPayment,
      grupo,
      totalPagado: 0,
      pagado,
      cancelado,
      daysPayment,
      moneyToPayment,
    };
    const saveUser = await User.create(dataUser);
    return res.status(200).json(saveUser);
  } catch (error) {
    console.log("Error al crear un usuario");
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
    paymentMethod,
    direccion,
    modalityPayment,
    grupo,
    totalPagado,
    pagado,
    cancelado,
    daysPayment,
    moneyToPayment,
  } = req.body;
  try {
    const dataUser = {
      username,
      lastName,
      capitalPrestado,
      total,
      fechaPrestamo,
      fechaPago,
      paymentMethod,
      direccion,
      modalityPayment,
      grupo,
      totalPagado,
      pagado,
      cancelado,
      daysPayment,
      moneyToPayment,
    };
    //?El método update devuelve un array donde el primer elemento es el número de filas afectadas (actualizadas en la db)
    const [rowsUpdated] = await User.update(dataUser, {
      where: {
        id: id,
      },
    });
    console.log(rowsUpdated);
    if (rowsUpdated > 0) {
      const updatedUser = await User.findByPk(id);
      return res
        .status(200)
        .json({ response: "Usuario editado con exito", data: updatedUser });
    } else {
      return res.status(404).json({ response: "Usuario no encontrado" });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ response: "Ocurrió un error", error: error.message });
  }
}

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const userDeleted = await User.destroy({
      where: {
        id,
      },
    })
    return res
      .status(200)
      .json({ response: "Usuario eliminado con exito", data: userDeleted });
  } catch (error) {
    return res
      .status(500)
      .json({
        response: "Error al querer eliminar un usuario",
        error: error.message,
      });
  }
};

const getCanceledUsers = async (req, res) => {
  try {
    const usersCanceled = await User.findAll({
      where: {
        cancelado: true,
      },
    });
    return res
      .status(200)
      .json({ response: "Usuarios cancelados obtenidos", data: usersCanceled });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getUserPaymentHistory = async (req, res) => {
  try {
    const usersPayment = await User.findAll({
      where: {
        pagado: true,
      },
    });
    return res
      .status(200)
      .json({ response: "Historial de usuarios pagados", data: usersPayment });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllUser,
  createUser,
  updateUser,
  deleteUser,
  getCanceledUsers,
  getUserPaymentHistory,
};
