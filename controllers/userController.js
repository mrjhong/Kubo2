import { userService } from "../services/userService.js";


export const login =async (req, res) => {
  const { username, password } = req.body;
    try {
        const jwt = await userService.authenticateUser(username, password)
        if (jwt) {
            return res.status(200).json({ token: jwt });
        } else {
            return res.status(401).json({ message: 'Credenciales inválidas' });
        }
    }
    catch (error) {
        console.log(error);
        return res.status(401).json({ message: 'Credenciales inválidas' });
    }
};

export const register = (req, res) => {
  const { username, password } = req.body;
   try {
    const user = userService.registerUser(username, password);
    return  res.status(201).json({ id: user.id, username: user.name , message: 'Usuario registrado exitosamente' });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Error al registrar el usuario' });
    }
}

export const getUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        return res.status(200).json(users);
    } catch (error) {
        return res.status(500).json({ message: 'Error al obtener los usuarios' });
    }
}
