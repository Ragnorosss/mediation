export const ChekboxList = () => {

  const filterThems = {
    periods: 'перiодами',
    thems: 'темами',
  }
  const themLabel = [
    {
      id:1,
      them:'Тема 1',
    },
    {
      id:2,
      them:'Тема 2',
    },
    {
      id:3,
      them:'Тема 3',
    },
    {
      id:4,
      them:'Тема 4',
    },
    {
      id:5,
      them:'Тема 5',
    },
    {
      id:6,
      them:'Тема 6',
    },
    {
      id:7,
      them:'Тема 7',
    },
    {
      id:8,
      them:'Тема 8',
    }
  ]
  const periodsLabel = [
    {
      id:1,
      period:'90-тi роки',
    },
    {
      id:2,
      period:'1998-2004',
    },
    {
      id:3,
      period:'2004-2010',
    },
    {
      id:4,
      period:'2010-2014',
    },
    {
      id:5,
      period:'2014-н.ч.',
    },
 
  ]
  return (
    <div>
      <h1>{filterThems.thems}</h1>
        {themLabel.map(thems =>
          <div key={thems.id}>
            <input type="checkbox" name={thems.them}/>  
            <label htmlFor="html">{thems.them}</label>
          </div>
        )}
        <h2>{filterThems.periods}</h2>
        {periodsLabel.map(periods =>
          <div key={periods.id}>
            <input type="checkbox" name={periods.them}/>  
            <label htmlFor="html">{periods.period}</label>
        </div>
        )}
    </div>
  )
}
