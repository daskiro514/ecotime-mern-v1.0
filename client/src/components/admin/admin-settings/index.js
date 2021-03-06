import React from 'react'
import { Link } from 'react-router-dom'

const AdminSettings = () => {

  return (
    <div className='row'>
      <div className='col-12 mt-4'>
        <div className='h2'>Settings</div>
      </div>
      <div className='col-md-6 my-3'>
        <div className='bg-white rounded-lg shadow p-3'>
          <div className='h5'>Communication</div>
          <div className='row'>
            <div className='col-md-6 my-2'>
              <Link to='/email-server'>
                <div className='d-flex align-items-center'>
                  <div className='rounded-pill mr-2 bg-light-blue p-2'>
                    <img alt='SETIMAGE' src='/img/email-server.svg' width='25' height='25' />
                  </div>
                  <div className='color-thick-green'>Email Server</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='col-md-6 my-3'>
        <div className='bg-white rounded-lg shadow p-3'>
          <div className='h5'>Sync Path</div>
          <div className='row'>
            <div className='col-md-6 my-2'>
              <Link to='/ubs-payroll'>
                <div className='d-flex align-items-center'>
                  <div className='rounded-pill mr-2 bg-light-orange p-2'>
                    <img alt='SETIMAGE' src='/img/ubs-payroll.svg' width='25' height='25' />
                  </div>
                  <div className='color-thick-green'>UBS Payroll Path</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='col-md-12 my-3'>
        <div className='bg-white rounded-lg shadow p-3'>
          <div className='h5'>Company Information</div>
          <div className='row'>
            <div className='col-md-6 my-2'>
              <Link to='/company-details'>
                <div className='d-flex align-items-center'>
                  <div className='rounded-pill mr-2 bg-light-orange p-2'>
                    <img alt='SETIMAGE' src='/img/company-details.svg' width='25' height='25' />
                  </div>
                  <div className='color-thick-green'>Company Details</div>
                </div>
              </Link>
            </div>
            <div className='col-md-6 my-2'>
              <Link to='/company-logo'>
                <div className='d-flex align-items-center'>
                  <div className='rounded-pill mr-2 bg-light-blue p-2'>
                    <img alt='SETIMAGE' src='/img/company-logo.svg' width='25' height='25' />
                  </div>
                  <div className='color-thick-green'>Company Logo</div>
                </div>
              </Link>
            </div>
            <div className='col-md-6 my-2'>
              <Link to='/software-setting'>
                <div className='d-flex align-items-center'>
                  <div className='rounded-pill mr-2 bg-light-blue p-2'>
                    <img alt='SETIMAGE' src='/img/software-setting.svg' width='25' height='25' />
                  </div>
                  <div className='color-thick-green'>Software Setting</div>
                </div>
              </Link>
            </div>
            <div className='col-md-6 my-2'>
              <Link to='/static-message'>
                <div className='d-flex align-items-center'>
                  <div className='rounded-pill mr-2 bg-light-blue p-2'>
                    <img alt='SETIMAGE' src='/img/static-message.svg' width='25' height='25' />
                  </div>
                  <div className='color-thick-green'>Static Message</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='col-md-6 my-3'>
        <div className='bg-white rounded-lg shadow p-3'>
          <div className='h5'>User & Access Management</div>
          <div className='row'>
            <div className='col-md-6 my-2'>
              <Link to='/user'>
                <div className='d-flex align-items-center'>
                  <div className='rounded-pill mr-2 bg-light-orange p-2'>
                    <img alt='SETIMAGE' src='/img/user.svg' width='25' height='25' />
                  </div>
                  <div className='color-thick-green'>User</div>
                </div>
              </Link>
            </div>
            <div className='col-md-6 my-2'>
              <Link to='/access-management'>
                <div className='d-flex align-items-center'>
                  <div className='rounded-pill mr-2 bg-light-blue p-2'>
                    <img alt='SETIMAGE' src='/img/access-management.svg' width='25' height='25' />
                  </div>
                  <div className='color-thick-green'>Access Management</div>
                </div>
              </Link>
            </div>
            <div className='col-md-6 my-2'>
              <Link to='/user-delete'>
                <div className='d-flex align-items-center'>
                  <div className='rounded-pill mr-2 bg-light-purple p-2'>
                    <img alt='SETIMAGE' src='/img/user-delete.svg' width='25' height='25' />
                  </div>
                  <div className='color-thick-green'>Permanent User Delete</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='col-md-6 my-3'>
        <div className='bg-white rounded-lg shadow p-3'>
          <div className='h5'>Backup & Restore</div>
          <div className='row'>
            <div className='col-md-6 my-2'>
              <Link to='/backup'>
                <div className='d-flex align-items-center'>
                  <div className='rounded-pill mr-2 bg-light-orange p-2'>
                    <img alt='SETIMAGE' src='/img/backup.svg' width='25' height='25' />
                  </div>
                  <div className='color-thick-green'>Backup</div>
                </div>
              </Link>
            </div>
            <div className='col-md-6 my-2'>
              <Link to='/restore'>
                <div className='d-flex align-items-center'>
                  <div className='rounded-pill mr-2 bg-light-blue p-2'>
                    <img alt='SETIMAGE' src='/img/restore.svg' width='25' height='25' />
                  </div>
                  <div className='color-thick-green'>Restore</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminSettings