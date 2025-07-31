import { useEffect, useState } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

function Records() {
  const { t } = useTranslation();
  const [records, setRecords] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ title: '', description: '' });

  const fetchRecords = async () => {
    const res = await axios.get('http://localhost:5000/api/records');
    setRecords(res.data);
  };

  useEffect(() => {
    fetchRecords();
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/records/${id}`);
    fetchRecords();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/records', formData);
    setFormData({ title: '', description: '' });
    setShowForm(false);
    fetchRecords();
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>{t('records.title')}</h2>
      <button onClick={() => setShowForm(true)}>{t('records.add')}</button>

      {showForm && (
        <form onSubmit={handleSubmit} style={{ marginTop: '1rem' }}>
          <input
            type="text"
            placeholder={t('records.form.titlePlaceholder')}
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder={t('records.form.descriptionPlaceholder')}
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          />
          <button type="submit">{t('records.form.save')}</button>
          <button type="button" onClick={() => setShowForm(false)}>
            {t('records.form.cancel')}
          </button>
        </form>
      )}

      <table border="1" style={{ marginTop: '2rem', width: '100%' }}>
        <thead>
          <tr>
            <th>{t('records.table.title')}</th>
            <th>{t('records.table.description')}</th>
            <th>{t('records.table.actions')}</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <tr key={record._id}>
              <td>{record.title}</td>
              <td>{record.description}</td>
              <td>
                <button onClick={() => handleDelete(record._id)}>
                  {t('records.table.delete')}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Records;
