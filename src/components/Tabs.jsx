const Tabs = ({config = '', imgSrc = '', activeTab, setActiveTab}) => {
  return (
    <>
    <div className="flex justify-between pt-2">
      <div className='flex gap-4'>
        {config.map((entry, index) => (
          <div className={`pb-2 cursor-pointer ${activeTab === index ? 'border-b-2 border-pink text-black/85' : 'text-black/65'}`} key={index}
            onClick={() => setActiveTab(index)}
          >
            {entry.header}
          </div>
        ))}
      </div>
      {imgSrc && <div className='cursor-pointer'>
        <img src={imgSrc} alt="Remove Icon" />
      </div>}
      </div>
      <div>
        {config[activeTab].component}
      </div>
    </>
  )
}

export default Tabs