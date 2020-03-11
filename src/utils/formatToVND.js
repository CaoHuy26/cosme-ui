const formatToVND = 
  (number) => number.toLocaleString('it-IT', 
    {
      style : 'currency',
      currency : 'VND'
    }
  );

export default formatToVND;