/**
 * TODO:
 * - aimer logo
 */
// import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
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
import { useForm, Controller } from "react-hook-form";

function App() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      fullname: '',
      phoneNumber: '',
      checkinDateTime: '',
      checkoutDateTime: '',
      roomType: '',
      totalPrice: '',
      paidAmount: '',
      remainingAmount: '',
    }
  });
  const [cardContent, setCardContent] = useState('')
  const onSubmit = data => {
    data.totalPrice = new Intl.NumberFormat('vi-VN').format(data.totalPrice)
    data.paidAmount = new Intl.NumberFormat('vi-VN').format(data.paidAmount)
    data.remainingAmount = new Intl.NumberFormat('vi-VN').format(data.remainingAmount)

    setCardContent(
      <div>
        Aimer.dalat <br />
        {data.fullname} <br />
        Sđt : {data.phoneNumber} <br />
        Checkin: {data.checkin} <br />
        Checkout: {data.checkout} <br />
        {data.roomType}: {data.totalPrice} đồng <br /> <br />

        Khách đã cọc: {data.paidAmount} đồng <br />
        Còn thanh toán: {data.remainingAmount} đồng <br />
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
            render={({ field }) => <Input placeholder="Số điện thoại" {...field} />}
          />
          <Controller
            name="checkinDateTime"
            control={control}
            render={({ field }) => <Input placeholder="Checkin" {...field} type='datetime-local' />}
          />
          <Controller
            name="checkoutDateTime"
            control={control}
            render={({ field }) => <Input placeholder="Checkout" {...field} />}
          />
          <Controller
            name="roomType"
            control={control}
            render={({ field }) => <Input placeholder="Loại phòng" {...field} />}
          />
          <Controller
            name="totalPrice"
            control={control}
            render={({ field }) => <Input placeholder="Tổng tiền" {...field} type='number' />}
          />
          <Controller
            name="paidAmount"
            control={control}
            render={({ field }) => <Input placeholder="Khách đã cọc" {...field} type='number' />}
          />

          <Controller
            name="remainingAmount"
            control={control}
            render={({ field }) => <Input placeholder="Còn thanh toán" {...field} type='number' />}
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
