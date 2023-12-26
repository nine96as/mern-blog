import bcrypt from 'bcrypt';
import 'dotenv/config';
import jwt from 'jsonwebtoken';
import { User } from '../models/User.js';

export const register = async (req, res) => {
  try {
    const { username, password } = req.body;

    const salt = await bcrypt.genSalt(parseInt(process.env.BCRYPT_SALT_ROUNDS));

    const result = await User.create({
      username: username,
      password: await bcrypt.hash(password, salt)
    });
    res.status(201).json(result);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username: username });

    if (!user) return res.status(401).json({ error: 'User not found' });

    const authenticated = await bcrypt.compare(password, user.password);

    if (!authenticated) {
      return res.status(401).json({ error: 'Incorrect credentials' });
    } else {
      const token = jwt.sign(
        { userId: user._id },
        process.env.JWT_SECRET,
        { expiresIn: '1h' },
        (e, token) => {
          if (e) return res.status(500).json({ error: e.message });

          res
            .cookie('token', token, {
              maxAge: 60 * 60 * 1000, // 1 hour
              httpOnly: true,
              secure: true,
              sameSite: true
            })
            .json('ok');
        }
      );
    }
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const logout = async (req, res) => {
  try {
    const userToken = req.headers['authorization'];
    const token = await Token.findOne({ token: userToken });

    if (!token) {
      throw new Error('Token not found');
    }

    const result = await Token.deleteOne({ token: token.token });
    res.status(200).json(result);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};
