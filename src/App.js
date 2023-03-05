/**
 * TODO:
 * - validation for remainingAmount
 * - aimer logo
 * - add number of guess
 */
// import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'
import {
  Box,
  Input,
  Typography,
  Divider,
  Card,
  CardContent,
  // CardActions,
  Button
} from '@mui/material'
import moment from 'moment'
import { useForm, Controller } from "react-hook-form";

function App() {
  const { control, watch, handleSubmit } = useForm({
    defaultValues: {
      fullname: '',
      phoneNumber: '',
      checkinDateTime: '',
      checkoutDateTime: '',
      roomType: '',
      totalPrice: '',
      paidAmount: '',
    }
  });

  const [cardContent, setCardContent] = useState('')
  const onSubmit = data => {
    const remainingAmount = new Intl.NumberFormat('vi-VN').format(data.totalPrice - data.paidAmount)
    data.totalPrice = new Intl.NumberFormat('vi-VN').format(data.totalPrice)
    data.paidAmount = new Intl.NumberFormat('vi-VN').format(data.paidAmount)
    data.checkinDateTime = moment(data.checkinDateTi8me).format("DD/MM/YY Hg");
    data.checkoutDateTime = moment(data.checkoutDateTi8me).format("DD/MM/YY Hg");

    setCardContent(
      <div>
        Aimer.dalat <br />
        {data.fullname} <br />
        Sđt : {data.phoneNumber} <br />
        Checkin: {data.checkinDateTime} <br />
        Checkout: {data.checkoutDatetime} <br />
        {data.roomType}: {data.totalPrice} đồng <br /> <br />

        Khách đã cọc: {data.paidAmount} đồng <br />
        Còn thanh toán: {remainingAmount} đồng <br />
        <br />
        Địa chỉ: 13 Trần Khánh Dư (nối dài) - P.8 - Đà Lạt <br />
        Sđt: 0933 842 420 <br />
        <br />
        Cảm ơn quý khách.
      </div>
    )
  }

  return (
    <Box
      sx={{
        p: 5,
      }}>
      <Typography variant='h4'>Aimer.dalat</Typography>
      <Typography variant='h6'>Booking Confirmation</Typography>
      <Divider sx={{ mt: 2, mb: 2 }} />

      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          sx={{
            pt: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
          }}>
          <Controller
            name="fullname"
            control={control}
            render={({ field }) => <Input placeholder="Họ Tên" {...field} />}
          />
          <Controller
            name="phoneNumber"
            control={control}
            render={({ field }) => <Input placeholder="Số điện thoại" pattern="[0-9]*" {...field} />}
          />
          <Controller
            name="checkinDateTime"
            control={control}
            render={({ field }) => <Input placeholder="Checkin" {...field} type='datetime-local' />}
          />
          <Controller
            name="checkoutDateTime"
            control={control}
            render={({ field }) => <Input placeholder="Checkout" {...field} type='datetime-local' />}
          />
          <Controller
            name="roomType"
            control={control}
            render={({ field }) => <Input placeholder="Loại phòng" {...field} />}
          />
          <Controller
            name="totalPrice"
            control={control}
            render={({ field }) => <Input placeholder="Tổng tiền" {...field} pattern="[0-9]*" type='number' />}
          />
          <Controller
            name="paidAmount"
            control={control}
            render={({ field }) => <Input placeholder="Khách đã cọc" {...field} pattern="[0-9]*" type='number' />}
          />
          <Button type="submit" variant="contained">Tạo note</Button>
        </Box>
      </form>

      <Divider sx={{ mt: 2, mb: 2 }}>Booking Confirm</Divider>
      {cardContent &&
        <Card>
          <CardContent>
            {cardContent}
          </CardContent>
          {/* <CardActions>
            <Button onClick={handleClickCopyButton}>Copy</Button>
          </CardActions> */}
        </Card>
      }

    </Box>
  );
}

export default App;
