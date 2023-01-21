import { Controller, Get, Post, Body, Session } from '@nestjs/common';
import { CreateUserDto } from './authCreate.dto';
import { TeamMemberService } from 'src/Models/TeamMember/teamMember.service';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { LoginUserDto } from './authLogin.dto';
import { ConfigService } from '@nestjs/config';

@Controller('auth')
export class AuthController {
  constructor(
    private teamMemberService: TeamMemberService,
    private configService: ConfigService,
  ) {}

  //   username: String;
  //   email: String;
  //   password: String;
  //   team_id: String;
  //   created_at : String;

  @Post('/signup')
  async signup(
    @Body() createUser: CreateUserDto,
    @Session() session: Record<string, any>,
  ) {
    // console.log(createUser);
    const { username, email, password } = createUser;
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const isValidEmail = emailRegex.test('john@example.com');
    if (!isValidEmail) {
      return { message: 'Invalid email address' };
    }

    const isUser = await this.teamMemberService.find({ email: email });

    if (isUser[0]) {
      return { message: 'Email Already exists.' };
    }

    const passwordHash = bcrypt.hashSync(password, 8);

    const user = await this.teamMemberService.create({
      username,
      email,
      password: passwordHash,
    });

    const token = jwt.sign(
      { id: user.id },
      this.configService.get('jwt_secret') || "U6gt!WdEht6H:rF0KELs#DD7s@_NfJ/w2hp1h+Z!HIWB*LUKvU:ASpuAKQ2QM3sHew=)DF7ihD3Q-+Z5@l?=qyT:5qGG5ulkd=4y",
      {
        expiresIn: 86400, // 24 hours
      },
    );
    // session.id = user.id;
    return {
      user: user.id,
      username: user.username,
      email: email,
      access_token: token,
    };
  }
  @Post('/login')
  async login(@Body() loginUserDto: LoginUserDto) {
    if (loginUserDto && loginUserDto.password && loginUserDto.email) {
      // console.log(loginUserDto);

      const user = await this.teamMemberService.findByEmailId(
        loginUserDto.email,
      );
      // console.log(user);

      if (!user) {
        return { message: 'User Not found.' };
      }

      const passwordIsValid = bcrypt.compareSync(
        loginUserDto.password,
        user.password,
      );

      if (!passwordIsValid) {
        return {
          message: 'Invalid Password!',
        };
      }

      const token = jwt.sign(
        { id: user.id },
        this.configService.get('jwt_secret') || "U6gt!WdEht6H:rF0KELs#DD7s@_NfJ/w2hp1h+Z!HIWB*LUKvU:ASpuAKQ2QM3sHew=)DF7ihD3Q-+Z5@l?=qyT:5qGG5ulkd=4y",
        {
          expiresIn: 86400, // 24 hours
        },
      );

      return {
        id: user.id,
        username: user.username,
        token,
      };
    }
  }
  @Post('/logout')
  async logout() {
    return 'Not Implemented yet';
  }
}
